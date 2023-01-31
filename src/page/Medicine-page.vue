<template>
<section class="bg">
    <div class="mx-5 rounded h-100 d-flex align-items-center justify-content-center">
      <div class="mt-3 container-fluid px-5 card">
          <div class="card-body">
              <h1 class="mt-4 mb-4">ข้อมูลยา</h1>
              <div class="mb-4">
                  <div>
                      <div class="d-flex justify-content-end">
                          <button class="mb-4 btn btn-primary"><a href="addmedicine.html" style="text-decoration: none" class="text-white"><i class='bx bx-plus-medical'></i> เพิ่มยา</a></button>
                      </div>
                      <table id="datatablesSimple" class="table table-bordered" >
                          <thead class="table-header">
                              <tr>
                                  <th style="width: 5%;">รหัส</th>
                                  <th style="width: 10%;">ชื่อยา</th>
                                  <th style="width: 20%;">รูปยา</th>
                                  <th style="width: 20%;">รายละเอียด</th>
                                  <th style="width: 20%;">วิธีการใช้ยา</th>
                                  <th style="width: 13%;"></th>
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
.bg{
  width: 85%;
}
</style>