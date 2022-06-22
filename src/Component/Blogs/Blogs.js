import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h3>
                Question Part
            </h3>
            <div>
                <h4>
                    What is semantic tag?

                </h4>
                <h6>
                    Ans:Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.
                </h6>
            </div>
                <h4>What is context API?</h4>
                <h6>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </h6>
            <div>

            </div>
        </div>
    );
};

export default Blogs;