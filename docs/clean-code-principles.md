### Some princples to be followed for clean code:

1.Outer-to-Inner Isolation:
The name of something declared in an outer circle must not be mentioned by the code
in the an inner circle.
That can be functions, classes, variables, or any other named
software entity.
Same way data formats used in an outer circle should not be used by an inner circle,
especially if those formats are generate by a framework in an outer circle.

Example:
Bad:

# Entity layer using Django ORM model directly (outer layer!)

class User:
def **init**(self, orm_user: DjangoUserModel):
self.name = orm_user.username

Good:

# Entity layer independent of framework

class User:
def **init**(self, name: str):
self.name = name

The entity just holds the data.Conversion from DjangoUserModel happens in an adapter (outer circle).

2.Entity Layer Independence:
No operational change to any particular application should affect the entity layer.

Example:
Switch Web UI -> Mobile App, your Order entity class still represents an order the same way.

Switch MySQL -> MongoDB, your Invoice entity (with business logic for totals, tax) remains unchanged.

3.Database Independence:
No code inward of this circle should know anything at all about the database.

Example
Bad:

// Use case layer directly writing SQL (depends on DB)
function saveUser(user) {
db.query("INSERT INTO users VALUES (?)", [user.name]);
}

Good:

// Define an interface for persistence
class UserRepository {
save(user) { throw "Not implemented"; }
}

// Use case depends on abstraction
function registerUser(user, repo) {
repo.save(user);
}

4.Dependency rule:
Code dependencies should always point inwards (from outer layers to inner layers).
Inner layers must never depend on outer layers.

Example:
The Use Case layer defines an interface PaymentGateway.

The Framework/Infrastructure layer implements StripePaymentGateway or PayPalPaymentGateway.

Use Case depends only on the interface, not the concrete framework.

4.Flexibility:
Because I’ve isolated external stuff (frameworks, UI, DB) to outer layers,
I can swap them later with minimal fuss.

Example:

Today: I use MySQLUserRepository in production.

Tomorrow: Swap with MongoUserRepository without changing entities or use cases.

Same with UI -> Web, Console, or Mobile apps all talking to the same core.
