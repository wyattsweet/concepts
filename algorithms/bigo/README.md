# Big O

The way we analyze how efficient algorithms are. Ideas is to get a broad stroke view of the performance rather than a detailed grainular view. Meaning, we only care if the difference is very large.

For the following algorithm 

```
function crossAdd(input) {
    var answer = [];
    for (var i = 0; i < input.length; i++) {
        var goingUp = input[i];
        var goingDown = input[input.length-1-i];
        answer.push(goingUp + goingDown);
    }
    return answer;
}

``` 

The big O value is O(n), because you go through each input once.

Always assumes worst case scenerio.


If you have a loop within a loop such as 

```
function makeTuples(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
}

```

It would be O(n²). Typically O(n²) algorithms are not what you want.
You can basically find big O by looking at loops.

---

If there are no loops and you do something exit/return, it is called **contant time** and it is O(1). 
If your cod employs divide and conquer strategy (recurssion) it will most likely be O(log n). As you add more items it's going to take less time per item you add to the list. Logerithmic time.
