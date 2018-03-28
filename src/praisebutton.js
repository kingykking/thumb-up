class PraiseButton {
	constructor(config) {
		this._config = config||{baseNumber:0,id:'body'};
		this._num = this.getConfig('baseNumber');
		this.praiseButton = $(this.getConfig('id'));
	}
	init() {
		this.bind();
		this.render();
	}
	bind() {

	}
	render() {

	}
	destroy() {

	}
	getConfig(key) {
		return this._config[key];
	}
	setConfig(key,value) {
		this._config[key] = value;
	}
	addNum() {
		this._num ++;
		return this._num;
	}
	getNum() {
		return this._num;
	}
	setNum(num) {
		this._num = num;
	}
}
export default PraiseButton;