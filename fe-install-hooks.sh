#!/bin/bash

echo "Installing dev dependencies..."

npm install --save-dev \
  husky lint-staged eslint prettier \
  @commitlint/cli @commitlint/config-conventional \
  eslint-plugin-sonarjs ts-prune depcheck

echo "Setting up Husky hooks..."

# Ensure .husky folder and Git hooks are initialized
mkdir -p .husky
git config core.hooksPath .husky

# Create shared husky loader
mkdir -p .husky/_

cat <<'EOF' > .husky/_/husky.sh
#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"
  }
  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."
  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi
  if [ -f ~/.huskyrc ]; then
    debug "sourcing ~/.huskyrc"
    . ~/.huskyrc
  fi
fi
EOF

chmod +x .husky/_/husky.sh

# Create pre-commit hook
cat <<'EOF' > .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
EOF
chmod +x .husky/pre-commit

# Create commit-msg hook
cat <<'EOF' > .husky/commit-msg
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit "$1"
EOF
chmod +x .husky/commit-msg

echo "Creating lint-staged config..."
cat <<EOF > .lintstagedrc.json
{
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,css,scss,md}": ["prettier --write"]
}
EOF

echo "Creating commitlint config..."
cat <<EOF > .commitlintrc.json
{
  "extends": ["@commitlint/config-conventional"]
}
EOF

echo "Creating VSCode workspace settings..."
mkdir -p .vscode

cat <<EOF > .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/node_modules": true
  },
  "prettier.requireConfig": true
}
EOF

echo "Updating .gitignore..."

touch .gitignore

# Add ignore entries only if not already present
grep -qxF '.vscode/' .gitignore || echo '.vscode/' >> .gitignore
grep -qxF '*.log' .gitignore || echo '*.log' >> .gitignore
grep -qxF '*.tsbuildinfo' .gitignore || echo '*.tsbuildinfo' >> .gitignore

echo "Pre-commit hooks and quality tools installed successfully"