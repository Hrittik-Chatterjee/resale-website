import React from 'react';

const Blog = () => {
    return (
        <div className='my-10'>
            <div className='flex '>
                <h2 className='text-xl mx-auto my-2 font-extrabold text-amber-600'>Here Are The Question and Answers</h2>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:

                       1. Hooks ,
                       2. React Context API ,
                       3. Apollo Link State .</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>When we read a property from object, and it is missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">

                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future. Some developers underestimate the importance of writing unit tests.  Any bugs are found easily and quicker. Code covered with tests is more reliable than the code without. If a future change breaks something in the code, developers will be able to identify the root of the problem right away rather than coming through an unwieldy codebase to find the issue.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;