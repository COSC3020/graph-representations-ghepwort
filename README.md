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

The runtime of conversion to adjacency matrix is $\Theta(|V|^2)$ for best case of limited edges and $\Theta(|V| \cdot |E|)$ for the average and worst cases.

The first set of loops to initilize an array of 0's has an outer loop that iterates over every vertex and the inner loops runs a number of vertex times. There is then a constant factor to populate with zeros. This gives the first loop a runtime of $|V| \cdot |V| \cdot 1$. The second set of loops loops has an outer loop that iterates over the every vertex and the inner loops iterates through the edges connected to the vertex. There is than a constant factor that inputs connected edges into the matrix. This gives the second loops a runtime of $|V| \cdot |E| \cdot 1$. The total runtimes end up being $|V| \cdot |V| \cdot 1 + |V| \cdot |E| \dot 1 = |V|^2 + |V| \cdot |E|$.

In the best case senario there is a constant number of edges so $|E| = 1$. Analyzing this case of $|E|$ we get $|V|^2 + |V| \cdot 1 = \Theta(|V|^2)$ so in the best case the algorithm doesn't depend on the number of edges asymptoticaly so $\Theta(|V|^2)$.

In the worst case senario the graph is conpleete so $|E| = |V|^2$. Analyzing this case of $|E|$ we get $|V|^2 + |V| \cdot |V|^2 = \Theta(|V|^3)$ so in the worst case the algorithm depends on the number of edges and verticies asymptoticaly so $\Theta(|V| \cdot |E|)$.

In the average case senario the graph the vertex is connected to half of the other vertex's so $|E| = \frac{|V|^2}{2}$. Analyzing this case of $|E|$ we get $|V|^2 + |V| \cdot \frac{|V|^2}{2} = \Theta(|V|^3)$ so in the average case the algorithm depends on the number of edges and verticies asymptoticaly so $\Theta(|V| \cdot |E|)$.


## Sources
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
