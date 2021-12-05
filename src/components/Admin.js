import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../reducers/user';

function Admin() {

    // const [page, setPage] = useState(0);
    // const [limit, setLimit] = useState(0);
    // const [data, setData] = useState('');

    const dispatch = useDispatch();

    const result = useSelector((state) => state.user.data);
    // console.log(result && result.data)
    // const limit = useSelector((state) => state.data.limit);
    // const data = useSelector((state) => state.user.data);
    // const { page, limit, data } = useSelector((state) => ({page: state.user.page, limit: state.user.limit, data: state.user.data}), [])

    useEffect(() => {
        dispatch(getUser());
    }, []);
    
    return (
        <div class="container-fluid">
                    <h1 class="h3 mb-2 text-gray-800">관리자 페이지</h1>
                    <p class="mb-4">사용자를 관리합니다 <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">사용자 목록</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                                        { result && result.data && result.data.map(data =>
                                            (
                                                <tr>
                                                <td>{data.id}</td>
                                                <td>{data.username}</td>
                                                <td>{data.first_name}</td>
                                                <td>{data.is_staff ? 'True':'False'}</td>
                                                <td>{data.date_joined}</td>
                                                <td>{data.last_login}</td>
                                                <td>setting</td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                    {/* <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </tfoot> */}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
  );
}

export default Admin;
