import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    const blogs = useLoaderData()
    return (
        <div className='container row justify-content-center mx-auto mt-5'>
        <h2 className='text-center p-3 rounded shadow'>QnA</h2>
            <div className='col-md-6'>

                {blogs.map((blog) => (
                    <div ref={ref} className='shadow rounded mt-5 p-5' key={blog.id}>
                        <Pdf targetRef={ref} filename="QnA.pdf">
                            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                        </Pdf>
                        <h2>{blog.question}</h2>
                        <p>{blog.ans}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;