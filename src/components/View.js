import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getComment } from '../reducers/comment';
import { getPostOne } from '../reducers/post';

const View = () => {
    const { id } = useParams();
    const { page, setPage } = useState();
    const { limit, setLimit } = useState();

    const dispatch = useDispatch();
    const post = useSelector((state) => state.post) || {};
    const comment = useSelector((state) => state.comment.data) || [];
    console.log(comment)
    useEffect(() => {
        dispatch(getPostOne(id));
        dispatch(getComment(id, page, limit))
    }, []);

    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-lg-8">
                <article>
                    <header className="mb-4">
                        <h1 className="fw-bolder mb-1">{ post.data && post.data.title }</h1>
                        {/* <div className="text-muted fst-italic mb-2">Posted on January 1, 2021 by Start Bootstrap</div> */}
                        <div className="text-muted fst-italic mb-2">{ post.data && post.data.created}</div>
                        <div className="badge bg-secondary text-decoration-none link-light">Web Design</div>
                        <div className="badge bg-secondary text-decoration-none link-light">Freebies</div>
                    </header>
                    <figure className="mb-4"><img className="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                    <section className="mb-5">
                        <p className="fs-5 mb-4">{ post.data && post.data.content }</p>
                        {/* <p className="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
                        <p className="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.</p>
                        <p className="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
                        <h2 className="fw-bolder mb-4 mt-5">I have odd cosmic thoughts every day</h2>
                        <p className="fs-5 mb-4">For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.</p>
                        <p className="fs-5 mb-4">Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p> */}
                    </section>
                </article>
                <section className="mb-5">
                    <div className="card bg-light">
                        <div className="card-body">
                            댓글 ({ post.data.comment_count || 0 })
                            {/* <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form> */}
                                {
                                    comment && comment.map(data => {
                                        return <div className="d-flex mb-4">
                                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                <div className="ms-4">
                                                    {data.username}
                                                    {data.content}
                                                </div>
                                        </div>
                                    })
                                    // post.data.comment_set && post.data.comment_set.map(data => (
                                    //     <div className="d-flex mb-4">
                                    //     {
                                    //         data.parent_comment_id == null ?
                                    //         <div className="d-flex mb-4">
                                    //             <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    //                 <div className="ms-4">
                                    //                     <div className="fw-bold">
                                    //                         댓글
                                    //                         { data.username }
                                    //                         { data.content }
                                    //                     </div>
                                    //             </div>
                                    //         </div>
                                    //         :
                                    //         <div>
                                    //             <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    //                 <div className="ms-3">
                                    //                     <div className="fw-bold">
                                    //                         대댓글
                                    //                         { data.username }
                                    //                         { data.content }
                                    //                     </div>
                                    //                 </div>
                                    //         </div>
                                    //     }
                                    //     </div>
                                    // ))
                                }
                        </div>
                    </div>
                </section>
            </div>
                        
                                            {/* //     <div className="ms-3">
                                            //     <div className="fw-bold">1{ data.username }</div> 
                                            //     { data.content }
                                            // </div>
                                            // :
                                            // <div className="d-flex mb-4">
                                            //     <div className="ms-3">
                                            //         <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            //         <div className="fw-bold">2{ data.username }</div> 
                                            //         { data.content }
                                            //     </div> 
                                            // </div> */}
            <div className="col-lg-4">
                <div className="card mb-4">
                    <div className="card-header">Categories</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="list-unstyled mb-0">
                                    {
                                        post.data && post.data.tag && post.data.tag.map(tag =>
                                            {
                                                return <li><a href="#!">{tag}</a></li>
                                            }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  );
}

export default View;
