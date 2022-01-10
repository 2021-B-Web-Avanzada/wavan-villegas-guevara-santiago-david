var _this = this;
var user = {
    nombre: "Santiago",
    apellido: 'Villegas',
    casado: 0,
    sueldo: 11.2,
    estado: "BN",
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return _this.sueldo + _this.sueldo * impuesto;
    },
    estadpActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
