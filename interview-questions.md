# ASSESSMENT 3: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What is object destructuring?

  Your answer: destructring is taking a methos and laying out its  different comonents as variables and if/elsde statements.

  Researched answer: destructring allows unpacking of array-values, object-properties into distinct variables



2. What are the three arguments that .map() and .filter() can accept?

  Your answer: (((value, index, array)))

  Researched answer:
The current item in the array
The array index of the current item
The entire array you called map on (code.tutsplus.com)



3. What is the difference between a class and an object?

  Your answer: class is a method? that can hold state, methods, objects, functions and more. Classes can be nested as well using child components. Objects have key: value structures and are useful for keeping/ passing/ altering and seperating infomation

  Researched answer: "Javascript uses prototypal inheritance, so there are no classes per se. Everything is an object; it's just that some objects have a common parent object whose methods/variables will be found when name resolution looks up the prototype chain." (stackoverflow.com)



4. What is the difference between a HTML div and a span?

  Your answer: unknown, do not remember using or seeing span ( oooooof no, we totally did this)

  Researched answer: "The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code." (htmldog.com)



5. What is React.Fragment and why would you want to use it?

  Your answer: React fragment is a concession to Reacts  structure: namely that it can only return one JSX element at a time. fragment allows you to nest all the JSX inside of one element

  Researched answer: :"Fragments let you group a list of children without adding extra nodes to the DOM." -reactjs.org



6. What are three options for creating responsive design?

  Your answer:
  ~ "clean" design: limited color usage within page, limited character usage, keep themes consistent.
  ~unknown
  ~unknown   ahhhhhh shoot I forgot what Sarah said about this in retro

  Researched answer:  mobile design first? okay yeah ill need help with this one



## Looking Ahead: Terms for Next Week
- Object oriented programming
          -The four principles of object-oriented programming are encapsulation, abstraction, inheritance, and polymorphism.
              -Encapsulation is achieved when each object keeps its state private, inside a class. Other objects don’t have direct access to this state. Instead, they can only call a list of public functions — called methods.
              -Applying abstraction means that each object should only expose a high-level mechanism for using it. This mechanism should hide internal implementation details. It should only reveal operations relevant for the other objects.
              -hierarchy. The child class reuses all fields and methods of the parent class (common part) and can implement its own (unique part).
              -Simply put, polymorphism gives a way to use a class exactly like its parent so there’s no confusion with mixing types. But each child class keeps its own methods as they are.
              (freecodecamp.com) really cool stuff


- irb -- interactive ruby


- Instance variable -- An instance variable is a variable which is declared in a class but outside of constructors, methods, or blocks. Instance variables are created when an object is instantiated, and are accessible to all the constructors, methods, or blocks in the class. (wikipedia) instances of variables?  


- Ruby hash -A Hash is a dictionary-like collection of unique keys and their values. Also called associative arrays, they are similar to Arrays, but where an Array uses integers as its index, a Hash allows you to use any object type. (ruby-doc.org)


- Class relationships - 'has many' and 'belongs too' class attributes


- Getter and Setter methods in Ruby --Getter methods are used to get the value of an instance variable while the setter methods are used to set the value of an instance variable of some class.
