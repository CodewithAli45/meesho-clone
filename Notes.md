Question and Answers

1.  What is the purpose of adding and removing event listeners?

    Ans-> Adding and removing event listeners is important as it ensures that code is efficient and does not contains any memory leaks. 
    When we add event lister we are telling browser to execute a specific function every time the events occurs. If we do not remove the event listener when it is no longer needed, the function will continue to execute even if user navigate from page.
    This causes performance issues and memory leak over time.

2.  What is memory leak?

    Ans-> Memory occurs when program fails to release memory that no longer needed, causing the progam to consume more and more memory overtime. This lead to performance issues and eventually crashed.