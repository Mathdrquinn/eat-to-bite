#Requirements Document
####_Eat to Bite_, a web application with clear potential
***

Build a program to find restaurants within a given radius of your location and filter their menus for diet specific options.
This application will:
* Take in a user's location and perform a search for restaurants within a selected distance of the user's position.
* Search will filter those restaurants for personalized diet-specific menu items
* Select a restaurant menu and enable favoriting items and add menu items to a list to calculate nutritional totals

***

### Elevator Pitch

Eat to Bite will allow users to perform location-specific searches for restaurants and restaurant menus and filter those results for their personal dietary needs.


### MVP Features
Create user log in 
users will be given titles
users can POST dietary restrictions to their profile that will persist
can add allergies
can add limits to nutrition intake for specific fields (calories, carbs, sodium)
can add warnings to nutrition intake for specific fields (calories, carbs, sodium)
GET user dietary restrictions and display them on a profile page
Updates user dietary information on an edit profile page
Delete user dietary restrictions from Edit page
Perform a GET request on a created or found database of restaurant locations
Create a database of restaurants and their menus
enable POST on collection of restaurants and items
enable GET
enable UPDATE on collection and items
enable delete on collection and items.
Link restaurant locations with menu
Create a search page that finds restaurants within a selected radius
get users location
use maps API or iframe
calculated distances between restaurants and people
filter search based on location
filter nutrition items based on dietary requirements
Featured Menu Item on home page

MVP Stories

Technologies
* MondogDB
* Heroku
* AngularJS
* bootstrap ui
* [nutrition API](http://www.nutritionix.com/api)
* Some sort of restaurant locator API
* Google Maps


Wireframes


Roadmap (additional features)

- Feature that allows user to combine menu items and calculate nutritional totals
    -- Enable a GET on nutritional data
    -- Enable a GET on user collection
    -- Enable a POST to a user collection
    -- Enable an Edit to user collection
    -- Enable a delete to user collection
- Eat to Bite will be mobile responsive and have a clean design
- Add family members and their diets
    -- Enable POST of family member to collection
    -- Enable GET of family member collection
    -- Enable Edit of family member collection
    -- Enable delete of family member collection
    -- Associate colors with family member's names
filter search results by adding colors to indicate safe or not save for family members'
Enable blog-like functionality to featured menu item



User Story Templates

1) Name:
User should be able to log in with username and password
Value Statement:
As a visitor to Eat to Bite, a person should be able to Sign up and us that information to log back in, in order that a user may have an individualized profile and make some content visible to authorized users.
Assumptions:
User is working with a modern browser, MEAN.io will take care of log-in

Acceptance Criterion:
Upon hitting submit on the sing-up form, a user should be able to log out and sign back in with user name and password
Notes or unknowns:

2) Name:
Profile and updating user
Value Statement:
User should be able to UPDATE his or her dietary needs on their profile page. This data should persist and CRUD should be enabled

Assumptions:
User has a log-in.

Acceptance Criterion:
Upon review of a collection, a POST action displays data on the mongo db

Notes or unknowns:
How to connect to the collection and which method to use (http resource, other)

3) Name:
Admin create restaurant
Value Statement:
An administrator should be able to add a restaurant and menu items to a collection on mongo db

Assumptions:
Admin has rights to this page and it only.

Acceptance Criterion
When restaurant is submitted, it displays in search view

Notes or unknowns
search page is not yet functional

4) Name
create search functionality
Value Statement:
A user should be able to see a list of area restaurants and those items be customized based on his or her dietary needs.
Assumptions
Services for restaurants and user are accessible

Acceptance Criterion
Items display on the search page with proper symbols

Notes or unknowns
How to add classes based on data…
5) Name
Display map
Value Statement:
A user should be able to provide his or her location and set a radius to narrow down the search results in order that they may find the appropriate restaurant for their needs.
Assumptions:
device is able to run geolocation
I have the time to figure out geolocation in depth

Acceptance Criterion:
Map displays on page with user location and scope radius drawn.  Restaurants that fit that scope are filtered for.

Notes or unknowns:

6) Name
Feature Menu Item homepage
Value Statement:
All users, while visiting the web application will see a featured menu item and its dietary description.
Assumptions

Acceptance Criterion
index.html is clean, sleek, and clear.  The page keeps attention and draws user/non-user into the site.

Notes or unknowns
