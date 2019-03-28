# Merge two Linked Lists
<!-- Short summary or background information -->
This is the 8th code challenge of JS 401 that requires us to take in two linked lists and zip them with alternating nodes.

## Challenge
<!-- Description of the challenge -->
Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
We started by declaring 4 references: ll2 and ll2 heads and the next of those heads. We then checked edge cases foir different lengths of each linked list. Finally we set a conditional to zip them together until we hit a null. We then returned the required head refernece for the zipped head. Big O space we kept to O(1) because we are zipping into one linked list. Space is O(n).

## Solution
[!Diagram]()

#Collaborators
Jason Burns
