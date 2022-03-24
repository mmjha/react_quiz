import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '../reducers/post';
import ReactPaginate from 'react-paginate';
import CustomAlert from './modal/customAlert';

function Board() {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    // const [data, setData] = useState([]);


    const dispatch = useDispatch();
    const post = useSelector((state) => state.post.data) || {};
    // const comment = useSelector((state) => state.comment.data) || {};

    const handlePageChange = (select) => {
        setPage(select.selected + 1)
        dispatch(getPost(select.selected + 1, limit))
    }

    const handleLimitChange = (select) => {
        setLimit(select.selected)
        dispatch(getPost(page, select.selected)) 
    }

    const handleAlert = () => {
        CustomAlert();
    }

    useEffect(() => {
        dispatch(getPost(page, limit));
    }, []);
    
    return (
        <div className="container-fluid">
        {/* <div className="container"> */}
                    <h1 className="h3 mb-2 text-gray-800">게시판</h1>
                    <p className="mb-4">글을 작성합니다</p>
                    {/* <button className="">글 작성</button> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">게시글 목록({ post.count || 0 })</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Name</th>
                                            {/* <th>Staff</th> */}
                                            <th>written date</th>
                                            <th>hits</th>
                                            <th>setting</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { post.data && post.data.map(data =>
                                            (
                                                <tr>
                                                <td>{data.id}</td>
                                                <Link to={{
                                                    pathname: `/view/${data.id}`,
                                                    info: {data:data},
                                                    state: { data : data }
                                                    }}>
                                                    <td>{data.title}({data.comment_count})</td>
                                                </Link>
                                                <td>{data.user}</td>
                                                <td>{data.created}</td>
                                                <td>{data.hits}</td>
                                                <td>
                                                    <button className="btn btn-danger btn-circle" onClick={() => handleAlert()}>
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <ReactPaginate
                        previousLabel="<"
                        nextLabel=">"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        // breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={post.total_page || 0}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        activeClassName="active"
                        // forcePage={page}
                    />
            </div>
  );
}

export default Board;
