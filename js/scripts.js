$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      const workTransportation = $(this).val();
      $("#responses").append(workTransportation + "<br>")
    });
    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      const funTransportation = $(this).val();
      $("#responses").append(funTransportation + "<br>")
    });
    $("#form").hide();
  });
});