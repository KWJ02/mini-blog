class ConflictError extends Error {
	status: number;

	constructor(status: number, message: string) {
		super(message);
		this.status = status;

		// 🔥 스택 트레이스 캡처 (V8 엔진용)
		Error.captureStackTrace(this, this.constructor);
		// 🔥 명확한 프로토타입 설정 (TypeScript 환경에서 `instanceof` 정상 동작 보장)
		Object.setPrototypeOf(this, ConflictError.prototype);
	}
}

export { ConflictError };
