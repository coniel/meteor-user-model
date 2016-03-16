/**
 * Represents a User
 * @class User
 * @param {Object} document An object representing a conversation ususally a Mongo document
 */
User = BaseModel.extend();

//Assign a reference from Meteor.users to User.prototype._collection so BaseModel knows how to access it
User.prototype.getCollection = function () {
    return Meteor.users;
};

/**
 * Check if the this user is the current logged in user or the specified user
 * @method isSelf
 * @param   {Object}  user The user to check against
 * @returns {Boolean} Whether or not this user is the same as the specified user
 */
User.prototype.isSelf = function (user) {
    var userId = user && user._id || Meteor.userId();

    if(this._id === userId){
        return true;
    }
};

/**
 * Get the default email address for the user
 * @method defaultEmail
 * @returns {String} The users default email address
 */
User.prototype.defaultEmail = function () {
    return this.emails && this.emails[0].address;
};

//Return override BaseModel.getCollection and return the users collection
//since we can't make reference to the collection when we setup the collection
User.prototype.getCollection = function () {
    return Meteor.users;
};

//Add the transform to the collection since Meteor.users is pre-defined by the accounts package
Meteor.users._transform = function (document) {
    return new User(document);
};

// Prevent all client side collection operations
Meteor.users.deny({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});