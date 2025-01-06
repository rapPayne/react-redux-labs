/// <reference types="react" />

declare namespace React {
  export function use<T>(promise: Promise<T>): T;
  export function useActionState(updater: (previousState: unknown, formData: FormData) => void, initialState: unknown): Array<>;
}