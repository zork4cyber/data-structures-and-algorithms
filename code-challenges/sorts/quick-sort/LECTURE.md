# Lecture Notes: Merge Sort
#### Author: Alexander White

Quick sort, sometimes called `partition-exchange sort` is one of the commonly used sorting algorithms in computer science.

It has good performance, it’s easy to implement and understand.

So how do you sort data with quick sort? How does this algorithm work? It all revolves around the the divide-and-conquer approach based on the idea of choosing one element as a pivot. Then partitioning the array around it so that: the left side of pivot contains all the elements that are less than the pivot element and the right side contains all elements greater than the pivot

## Learning Objectives
* What is Quick Sort?

* How does it work?


## Lecture Flow

* Why Quick Sort?
  * Quick Sort is an in-place sort unlike Merge Sort which requires extra space or memory. Merge Sort is expensive
* Quick Sort is always a choice when dealing with small data sets
  * It is easier to implement than Heap or Merge Sort
  
## Diagram
![Quick Sort Diagram](./assets/quick-sort-lecture.jpg)
<!-- Reference -->
<!-- https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/tutorial/ -->

## Algorithm

1. Choose a pivot point, usually the highest index value
2. Variable `left` points to the left of the pivot or the low index
3. Variable `right` points to the right of the pivot or the low index
4. While value at left is less than pivot move right
5. While value at right is greater than pivot move left
6. If both step 4 and step 5 does not match swap left and right
7. If left ≥ right, the point where they met is new pivot

## Pseudocode

```javascript
             
```

## Readings and References

**Watch**

* [Quick sort in 4 minutes](https://www.youtube.com/watch?v=Hoixgm4-P4M)

**Read**

* [JS: Interview Questions - Quick Sort](https://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort)

<!-- **Bookmark** -->
