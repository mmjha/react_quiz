import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '../reducers/post';
import ReactPaginate from 'react-paginate';
import CustomAlert from './modal/customAlert';
import Page from './View';

function Admin() {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    // const [data, setData] = useState([]);


    const dispatch = useDispatch();
    const result = useSelector((state) => state.post.data) || {};

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
        <div class="container-fluid">
        {/* <div class="container"> */}
                    <h1 class="h3 mb-2 text-gray-800">게시판</h1>
                    <p class="mb-4">글을 작성합니다</p>
                    {/* <button class="">글 작성</button> */}
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">게시글 목록({ result.count || 0 })</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                                        { result.data && result.data.map(data =>
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
                                                    <button class="btn btn-danger btn-circle" onClick={() => handleAlert()}>
                                                        <i class="fas fa-trash"></i>
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
                        pageCount={result.total_page || 0}
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

export default Admin;
