import React from 'react'

//two ways to use value from props
//1. props.value injecting
//2. Direct injecting through function arguement

function Sign({index = "0", name = "Name", role = "Role", location = "Location"}) {
    return (
        <>

            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <h1>{index}</h1>
                    
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p class="text-lg font-medium">
                                “Tailwind CSS is the only framework that I've seen scale
                                on large teams. It’s easy to customize, adapts to any design,
                                and the build size is tiny.”
                            </p>
                        </blockquote>
                        <figcaption class="font-medium">
                            <div class="text-sky-500 dark:text-sky-400">
                                {/* {props.name} */}
                                {name}
                            </div>
                            <div class="text-slate-700 dark:text-slate-500">
                                {/* {props.role} , {props.location} */}
                                {role} , {location}
                            </div>
                        </figcaption>
                    </div>
            </figure>

        </>
    )
}

export default Sign