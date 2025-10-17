let lastDeleted = null;

export const setLastDeleted = (task) => {
  lastDeleted = task;
};

export const consumeLastDeleted = () => {
  const task = lastDeleted;
  lastDeleted = null;
  return task;
};
