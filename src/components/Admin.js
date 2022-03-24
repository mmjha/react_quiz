import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../reducers/user';

function Admin() {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    // const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const result = useSelector((state) => state.user.data) || {};

    const handlePageChange = (select) => {
        setPage(select.selected + 1)
        dispatch(getUser(select.selected + 1, limit))
    }

    useEffect(() => {
        dispatch(getUser(page, limit));
    }, []);
    
    return (
        <div className="container-fluid">
        {/* <div className="container"> */}
                    <h1 className="h3 mb-2 text-gray-800">관리자 페이지</h1>
                    <p className="mb-4">사용자를 관리합니다</p>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">사용자 목록({ result.count || 0 })</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>User id</th>
                                            <th>Name</th>
                                            <th>Staff</th>
                                            <th>Join date</th>
                                            <th>Last login</th>
                                            <th>setting</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { result.data && result.data.map(data =>
                                            (
                                                <tr>
                                                <td>{data.id}</td>
                                                <td>{data.username}</td>
                                                <td>{data.first_name}</td>
                                                <td>{data.is_staff ? 'True':'False'}</td>
                                                <td>{data.date_joined}</td>
                                                <td>{data.last_login}</td>
                                                <td><b>수정</b></td>
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
