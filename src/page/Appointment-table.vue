<template>
  <section class="bg">
    <div class="mx-5 rounded h-100 d-flex align-items-center justify-content-center">
      <div class="container-fluid px-4 card">
            <div class="card-body">
                <h1 class="mt-4 mb-4">ตารางนัดหมาย</h1>
                <div class="mb-4">
                    <div class="">
                        <table id="datatablesSimple" class="table table-bordered" >
                            <thead class="table-header">
                                <tr>
                                    <th >ชื่อ-สกุล</th>
                                    <th >วันที่นัด</th>  
                                    <th >เวลา</th>
                                    <!-- <th ></th> -->
                                    <th ></th>
                                </tr>
                            </thead>
                            <tbody id="tbody"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>