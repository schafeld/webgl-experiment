var main=function() {

  var CANVAS=document.getElementById("webgl-canvas");

  CANVAS.width=window.innerWidth;
  CANVAS.height=window.innerHeight;

  /*========================= GET WEBGL CONTEXT ========================= */
  var GL;
  try {
    GL = CANVAS.getContext("experimental-webgl", {antialias: false});
  } catch (e) {
    alert("You are not webgl compatible : ") ;
    return false;
  }

  /*========================= SHADERS ========================= */
  /*jshint multistr: true */
  var shader_vertex_source="\n\
attribute vec2 position; //the position of the point\n\
void main(void) { //pre-built function\n\
gl_Position = vec4(position, 0., 1.); //0. is the z, and 1 is w\n\
}";


  var shader_fragment_source="\n\
precision mediump float;\n\
\n\
\n\
\n\
void main(void) {\n\
gl_FragColor = vec4(0.,0.,0., 1.); //black color\n\
}";

  
};