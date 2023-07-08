$.getJSON('data/dataprojek.json', function (hasil) {
    let template = hasil.Project;

    $.each(template, function (i, data) {
        $("#container-project").append(
            ` <div class=" col-6 p-3">
<a href="`+ data.linkProject + `"  class="link-project">
 <img src="`+ data.posterProjek + `" alt="` + data.namaProjek + `" title="` + data.tentang + `" name="` + data.tujuan + `" id="` + data.linkProject + `" class="img-fluid imgProject">
 </a>
</div>
`
        )
    })
})


