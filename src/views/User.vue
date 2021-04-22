<template>
    <div>
        <h4>Danh sách người dùng</h4>
        <table class="table">
            <thead>
                <tr>
                    <th>Mã người dùng</th>
                    <th>Tên</th>
                    <th>Ngày sinh</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">
                        <router-link to="/User/User01">User01</router-link>
                    </td>
                    <td>Phong</td>
                    <td>02/08/1775</td>
                </tr>
                <tr>
                    <td scope="row"><router-link to="/User/User02">User02</router-link></td>
                    <td>Đặng</td>
                    <td>08/04/1999</td>
                </tr>
            </tbody>
        </table>
    </div>
    <router-view />
</template>

<script>
    export default {
        name: 'User',
    }
</script>

<style scoped>

</style>