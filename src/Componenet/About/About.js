import React from 'react'

const About = () => {
    return (
        <div>
            <div className='card text-justify grid grid-cols-1 md:grid-cols-5 gap-4  border-x-8 my-20 mx-44 bg-yellow-100 rounded-2xl'>
                <div className='px-8 py-5'>
                    <h1 className=' text-xl text-green-700 font-bold'> Basic Questions</h1>
                </div>
                <div className='gun-info md:col-span-4 px-4'>
                    <h1 className=' text-xl font-thin text-black-900'>  This article starts off the module with a good look at what
                        accessibility is — this includes what groups of people we need to
                        consider and why, what tools different people use to interact with
                        the web, and how we can make accessibility part of our web
                        development workflow.</h1>

                </div>

            </div>
            <div className='card text-justify grid grid-cols-1 md:grid-cols-5 gap-4  border-x-8 my-20 mx-44 bg-yellow-100 rounded-2xl'>
                <div className='px-8'>
                    <h1 className=' text-xl text-green-700 font-bold'>CSS and JavaScript accessibility best practices?</h1>
                </div>
                <div className='gun-info md:col-span-4 px-4'>
                    <h1 className=' text-xl font-thin text-black-900'>CSS and JavaScript, when used properly, also have the potential to
                        allow for accessible web experiences, but if misused they can
                        significantly harm accessibility. This article outlines some CSS and
                        JavaScript best practices that should be considered to ensure that
                        even complex content is as accessible as possible.</h1>

                </div>

            </div>



        </div>
    )
}

export default About