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
        <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8">
                <article>
                    <header class="mb-4">
                        <h1 class="fw-bolder mb-1">{ post.data && post.data.title }</h1>
                        {/* <div class="text-muted fst-italic mb-2">Posted on January 1, 2021 by Start Bootstrap</div> */}
                        <div class="text-muted fst-italic mb-2">{ post.data && post.data.created}</div>
                        <div class="badge bg-secondary text-decoration-none link-light">Web Design</div>
                        <div class="badge bg-secondary text-decoration-none link-light">Freebies</div>
                    </header>
                    <figure class="mb-4"><img class="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                    <section class="mb-5">
                        <p className="fs-5 mb-4">{ post.data && post.data.content }</p>
                        {/* <p class="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
                        <p class="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.</p>
                        <p class="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
                        <h2 class="fw-bolder mb-4 mt-5">I have odd cosmic thoughts every day</h2>
                        <p class="fs-5 mb-4">For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.</p>
                        <p class="fs-5 mb-4">Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p> */}
                    </section>
                </article>
                <section class="mb-5">
                    <div class="card bg-light">
                        <div class="card-body">
                            댓글 ({ post.data.comment_count || 0 })
                            {/* <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form> */}
                                {
                                    comment && comment.map(data => {
                                        return <div class="d-flex mb-4">
                                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                <div class="ms-4">
                                                    {data.username}
                                                    {data.content}
                                                </div>
                                        </div>
                                    })
                                    // post.data.comment_set && post.data.comment_set.map(data => (
                                    //     <div class="d-flex mb-4">
                                    //     {
                                    //         data.parent_comment_id == null ?
                                    //         <div class="d-flex mb-4">
                                    //             <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    //                 <div class="ms-4">
                                    //                     <div class="fw-bold">
                                    //                         댓글
                                    //                         { data.username }
                                    //                         { data.content }
                                    //                     </div>
                                    //             </div>
                                    //         </div>
                                    //         :
                                    //         <div>
                                    //             <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    //                 <div class="ms-3">
                                    //                     <div class="fw-bold">
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
                        
                                            {/* //     <div class="ms-3">
                                            //     <div class="fw-bold">1{ data.username }</div> 
                                            //     { data.content }
                                            // </div>
                                            // :
                                            // <div class="d-flex mb-4">
                                            //     <div class="ms-3">
                                            //         <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            //         <div class="fw-bold">2{ data.username }</div> 
                                            //         { data.content }
                                            //     </div> 
                                            // </div> */}
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-header">Categories</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-6">
                                <ul class="list-unstyled mb-0">
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
