const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

const vertexShaderSource = `
    attribute vec3 aPosition;
    attribute vec3 aColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec3 vColor;

    void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
        vColor = aColor;
    }
`;

const fragmentShaderSource = `
    varying lowp vec3 vColor;

    void main() {
        gl_FragColor = vec4(vColor, 1.0);
    }
`;

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

const positionAttributeLocation = gl.getAttribLocation(program, 'aPosition');
const colorAttributeLocation = gl.getAttribLocation(program, 'aColor');
const modelViewMatrixUniformLocation = gl.getUniformLocation(program, 'uModelViewMatrix');
const projectionMatrixUniformLocation = gl.getUniformLocation(program, 'uProjectionMatrix');

const vertices = [
    // Front face
    -1.0, -1.0, 1.0, 1.0, 0.0, 0.0,
    1.0, -1.0, 1.0, 1.0, 1.0, 0.0,
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    -1.0, 1.0, 1.0, 1.0, 0.0, 1.0,
    // Back face
    -1.0, -1.0, -1.0, 0.0, 0.0, 0.0,
    -1.0, 1.0, -1.0, 0.0, 1.0, 0.0,
    1.0, 1.0, -1
]