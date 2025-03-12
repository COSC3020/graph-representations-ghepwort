# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.


## Answers

### Convert to Adjacency List

The runtime of conversion to adjacency list is $\Theta(|V|^2)$. The outer loops iterates through every vertex and the inner loop iterates through every vertex again. This is the process of checking every spot in the matrix. Inside the inner loop there is a constant check which gives us a timing of $|V| \cdot |V| \cdot 1 = \Theta(|V|^2)$.


### Convert to Adjacency Matrix

The runtime of conversion to adjacency matrix is $\Theta(|V|^2)$. The loops first set of loops runs through every vertex a vertex number of times to create a square matrix. The second set runs through every vertex and edge amount of times which is at maximum $|E| = |V|-1$. Combining this we get $|V| \cdot |V| + |V| \cdot |E| = |V|^2 + |V|^2 -|V| = 2|V|^2 - |V| = \Theta(|V|^2)$.


## Sources
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
