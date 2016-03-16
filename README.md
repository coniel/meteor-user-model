# User Model #

Based on [socialize:user-model](<https://github.com/copleykj/socialize-user-model/>) but uses (validated) Meteor methods instead of client side operations (as well as other changes/additions).

A model for a user which contains useful methods and can be extended by other packages by extending it's prototype to add methods that add functionality that are pertinent to their purpose. For example the socialize:friendships package extends the user model to provide helpers which return friend requests and friends for the user.

### User() - Extends BaseModel ###

**User.prototype.displayName()** - A representation of the user. "You" if the instance is the same as the current user, instance.username otherwise.

**User.prototype.isSelf(user)** - Checks if one user is another user by comparing _id's.

**User.prototype.defaultEmail** - Returns the first email address in the list of emails.
