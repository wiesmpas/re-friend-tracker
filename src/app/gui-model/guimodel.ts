export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Pascal's Friend Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        { 
                            "id": "nickname", 
                            "type": "text", 
                            "name": "Nickname", 
                            "width": 2, 
                            "required": true 
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        { 
                            "id":   "group", 
                            "type": "autocomplete", 
                            "name": "Group", 
                            "url": "/group", 
                            "form": "GroupForm", 
                            "width": 2 
                        },
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "form": "AddActivityForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        { 
                            "id": "comments", 
                            "type": "text", 
                            "name": "Comments", 
                            "width": 2, 
                            "required": true 
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddFriendForm",
                    "title": "Friend",
                    "url": "/activity/:activityKey/friend",
                    "formFieldList": [
                        {
                            "id": "friend",
                            "type": "autocomplete",
                            "name": "Friend",
                            "url": "/friend",
                            "defaultKey": "friendKey",
                            "readonly": true,
                            "form": "FriendForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
                        { 
                            "id": "name", 
                            "type": "text", 
                            "name": "ActivityName", 
                            "width": 2, 
                            "required": true 
                        },
                        { 
                            "id": "Date", 
                            "type": "date", 
                            "name": "Date", 
                            "width": 2, 
                            "required": true 
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        { 
                            "id": "comments", 
                            "type": "text", 
                            "name": "Comments", 
                            "width": 2,  
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                { 
                    "id": "GroupForm", 
                    "title": "Group", 
                    "url": "/group", 
                    "formFieldList": [ 
                        { 
                            "id": "name", 
                            "type": "text", 
                            "name": "GroupName", 
                            "width": 2, 
                            "required": true 
                        }, 
                        { 
                            "id": "creationDate", 
                            "type": "date", 
                            "name": "CreationDate", 
                            "width": 2, 
                            "required": true 
                        },
                        { 
                            "id": "comments", 
                            "type": "text", 
                            "name": "Comments", 
                            "width": 2, 
                            "required": true 
                        },
                        { 
                            "type": "deleteButton", 
                            "name": "Delete" 
                        }, 
                        { 
                            "type": "cancelButton", 
                            "name": "Cancel" 
                        }, 
                        { 
                            "type": "okButton", 
                            "name": "Ok" 
                        } 
                    ] 
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-skiing",
                            "color": "lime",
                            "page": "activityspage",
                        },
                        { 
                            "type": "button", 
                            "name": "Groups", 
                            "icon": "fa-weixin", 
                            "color": "wisteria", 
                            "page": "groupspage", 
                        },
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "page": "friendoverview"
                            //"form": {
                            // "form": "FriendForm"
                            // }
                        },
                    ]
                },{
                    "id": "friendoverview",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditFriend",
                            "icon": "fas fa-pen",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "button",
                            "id": "addactivity",
                            "name": "AddActivity",
                            "icon": "fa-skiing",
                            "color": "blue",
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-skiing",
                            "color": "blue",
                            "search": true,
                            "url": "/friend/:friendKey/activity",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "page": "locationspageoverview"
                            //"form": {
                            //    "form": "LocationForm"
                            //}
                        },
                    ]
                },
                {
                    "id": "locationspageoverview",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditLocation",
                            "icon": "fas fa-pen",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-skiing",
                            "color": "red",
                            "search": true,
                            "url": "/location/:locationKey/activity",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]
                },
                { 
                    "id": "activityspage", 
                    "elementList": [ 
                        { 
                            "type": "backbutton", 
                        }, 
                        { 
                            "type": "newButton", 
                            "name": "AddActivity", 
                            "icon": "fa-weixin", 
                            "color": "green", 
                            "form": { 
                                "form": "ActivityForm" 
                            } 
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/activity",
                            "page": "activitypageoverview"
                            //"form": {
                            //    "form": "AddActivityForm"
                            //}
                        }, 
                    ] 
                },
                {
                    "id": "activitypage2",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditActivity",
                            "icon": "fas fa-pen",
                            "color": "green",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "id": "addfriend",
                            "name": "AddFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "AddFriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/activity/:activityKey/friend",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                    ]
                }, 
                { 
                    "id": "groupspage", 
                    "elementList": [ 
                        { 
                            "type": "backbutton", 
                        }, 
                        { 
                            "type": "newButton", 
                            "name": "NewGroup", 
                            "icon": "fa-weixin", 
                            "color": "green", 
                            "form": { 
                                "form": "GroupForm" 
                            } 
                        },
                        { 
                            "type": "list", 
                            "icon": "fa-weixin", 
                            "color": "wisteria", 
                            "search": true, 
                            "url": "/group", 
                            "form": { 
                             "form": "GroupForm" 
                            } 
                        }, 
                    ] 
                } 
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
