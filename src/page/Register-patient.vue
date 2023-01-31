<template>
    <section class="bg">
        <div class="mx-5 rounded h-100 d-flex align-items-center justify-content-center">
            <div class="mt-3 container-fluid px-5 card">
                <div class="card-body">
                    <h1 class="mt-5 mb-4">ลงทะเบียนผู้ป่วยใหม่</h1>
                    <form class="mt-4" action="">
                        <div class="mb-4">
                            <div class="mb-4 w-100 pb-4 row">
                                <div class="mb-2 col-6">
                                    <label class="form-label d-flex justify-content-start">ชื่อ</label>
                                    <input class="form-control" type="text" id="name" placeholder="กรุณาป้อนชื่อ" required>
                                </div>
                                <div class="mb-2 col-6">
                                    <label class="form-label d-flex justify-content-start">นามสกุล</label>
                                    <input class="form-control" type="text" id="surname" placeholder="กรุณาป้อนนามสกุล" required>
                                </div>
                                <div class="mb-2 col-6">
                                    <label class="form-label d-flex justify-content-start">เบอร์โทรศัพท์</label>
                                    <input class="form-control" type="tel" id="phoneNO" placeholder="กรุณาป้อนเบอร์โทรศัพท์" required>
                                </div>
                                <div class="mb-2 col-6">
                                    <label class="form-label d-flex justify-content-start">อีเมล</label>
                                    <input class="form-control" type="email" id="email" placeholder="กรุณาป้อนอีเมล" >
                                </div>
                                <div class="mb-2 w-50">
                                    <label class="form-label d-flex justify-content-start">รหัสผ่าน</label>
                                    <input class="form-control" type="password" id="password" placeholder="กรุณาป้อนรหัสผ่าน" required>
                                </div>
                                <br>
                                <div class="mb-2 w-50">
                                    <!-- <label class="form-label d-flex justify-content-start">ยืนยันรหัสผ่าน</label>
                                    <input class="form-control" type="password" id="repassword" placeholder="กรุณาป้อนรหัสผ่าน" required></input> -->
                                </div>
                                <br>
                                <div class="mb-2 w-50">
                                    <label class="form-label d-flex justify-content-start">แพทย์ผู้ดูแล</label>
                                    <input class="form-control disabled" type="text" id="doctorname" required readonly>
                                </div>
                                <div class="mt-4 d-flex justify-content-center">
                                    <button type="submit" class="bg-success w-25 text-white" name="submitData" id="submitData">บันทึกข้อมูล</button>
                                </div>
                            </div>
                        </div>
                    </form>
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
  background-color: #D4E8F7;
}
.card{
  border-radius: 25px;
}

</style>