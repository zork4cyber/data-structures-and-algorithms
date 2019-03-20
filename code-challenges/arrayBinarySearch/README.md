# Insert and shift middle index of array
<!-- Short summary or background information -->
This the thrid code challenge of CodeFellows JavaScript 401 that requires us to search for a value in a sorted array and return the index it was found or -1 if not found.

## Challenge
<!-- Description of the challenge -->
Given a sorted array and search key, do a binary search and return the index the vlaue matches. If there is no match then return -1.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
We set three variables for beginning point of the array, end point of the array, and middle point of the array. We then checked if the value was equal to the midpoint value. If it was then we returned the midpoint. Else we checked to see if it was greater than or less than the midpoint and changed lowpoint and highpoint accordingly. The Big O space and time were O(n).

## Solution
![alt text](https://github.com/alex-white-401-advanced-javascript/data-structures-and-algorithms/tree/master/assets/array-binary-search.JPG)

#Collaborators
Cory Henderson

#Resources
Binary Search Algorithm in Javascript: (https://www.youtube.com/watch?v=92e5Ih4Chbk)