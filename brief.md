# SameWave Technical Test
 
One of the main screens in the SameWave app is a list of tasks. We'd like you to build a simplified version of this screen using the PSD provided.
 
The layout should be fluid and responsive. We'll be looking at your build on a variety of Apple and Android devices.
 
Each task has a title, an owner and a progress bar with values. The first 3 tasks have different progress bar colours and values and are all assigned to Joe Bloggs. For these, the content can all be static - we're interested to see how you approach the styling.
 
Note how any really long task titles should fade out towards the edge of the page.
 
Note how paused tasks don't have the "DUE TOMORROW" element - we want to see that excluded without breaking the layout.
 
For the next 7 tasks, you should populate the title and owner using the attached JSON file, looping through the list of task objects and rendering an item for each. You may need to use a templating library such as Mustache.js. All of these tasks can have a red progress bar set at 0 of 100.
 
You can use the same owner avatar for all 10 tasks.
 
The header (containing the "Tasks" title and menu icon) should be fixed at the top of the screen with the list sliding underneath as the user scrolls.
 
The 'plus' button should be fixed at the bottom of the screen, floating over the list as the user scrolls. The button doesn't need to be functional; we just want to see it fixed in position. An SVG is provided for this.
 
The menu should slide/animate in and out from the right when clicking the menu icon. Please use a CSS3 transform for this.
 
The menu items themselves don't need to link to anywhere; we just want to see the menu slide in/out animation.
 
Please create a GitHub repo and commit early and often. There should be regular commits as you progress through the test as we're also interested in your workflow.
 
Feel free to include any libraries or dependencies that you think may add to the user experience or make it easier to code.