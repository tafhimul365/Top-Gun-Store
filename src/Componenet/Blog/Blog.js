import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='card text-justify grid grid-cols-1 md:grid-cols-5 gap-4  border-x-8 my-20 mx-44'>
                <div className='px-8 py-5'>
                    <h1 className=' text-xl text-cyan-900 font-bold'>What is Context API?</h1>
                </div>
                <div className='gun-info md:col-span-4 px-4'>
                    <h1 className=' text-xl font-thin text-black-900'> In a typical React application, data is passed parent to child via props.If that props are required by many components within an application then the process is cubersome. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</h1>

                </div>

            </div>
            <div className='card text-justify grid grid-cols-1 md:grid-cols-5 gap-4  border-x-8 my-20 mx-44'>
                <div className='px-8 py-5'>
                    <h1 className=' text-xl text-cyan-900 font-bold'>What is semantic tag?</h1>
                </div>
                <div className='gun-info md:col-span-4 px-4'>
                    <h1 className=' text-xl font-thin text-black-900'>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. Semantic HTML elements are those that clearly describe their meaning in a human and machine-readable way. Elements such as {<b>header</b>}, {<b>footer</b>}, {<b>article</b>} are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.This is both semantic and presentational because people know what they are, and browsers know how to display them.</h1>

                </div>

            </div>

            <div className='card text-justify grid grid-cols-1 md:grid-cols-5 gap-4  border-x-8 my-20 mx-44'>
                <div className='px-8 py-5'>
                    <h1 className=' text-xl text-cyan-900 font-bold'>Difference between inline and block elements</h1>
                </div>
                <div className='gun-info md:col-span-4 px-4'>
                    <h1 className=' text-xl font-thin text-black-900'> Block level elements take up as much space as possible by default. Each block level element will start a new line on the page, stacking down the page. In addition to stacking vertically, block level elements will also take up as much horizontal space as possible.The {<b>P</b>} element is an example of a block level element. Each new paragraph tag will appear on its own line vertically. Paragraphs with longer content will stretch all the way to the edge of the page.</h1><br />
                    <h1 className='text-xl font-thin text-black-900'> Inline elements display in a line. They do not force the text after them to a new line.An anchor (or link) is an example of an inline element. You can put several links in a row, and they will display in a line.</h1>

                </div>

            </div>

        </div>
    );
};

export default Blog;