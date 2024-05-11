/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */
import * as capnp from "capnp-ts";
import { Struct as __S } from 'capnp-ts';
export declare const _capnpFileId = "b042d6da9e1721ad";
export declare enum Type_Which {
    UNKNOWN = 0,
    VOIDT = 1,
    BOOLT = 2,
    NUMBER = 3,
    PROMISE = 4,
    STRUCTURE = 5,
    STRING = 6,
    OBJECT = 7,
    ARRAY = 8,
    MAYBE = 9,
    DICT = 10,
    ONE_OF = 11,
    BUILTIN = 12,
    INTRINSIC = 13,
    FUNCTION = 14,
    JSG_IMPL = 15,
    JS_BUILTIN = 16
}
export declare class Type extends __S {
    static readonly UNKNOWN = Type_Which.UNKNOWN;
    static readonly VOIDT = Type_Which.VOIDT;
    static readonly BOOLT = Type_Which.BOOLT;
    static readonly NUMBER = Type_Which.NUMBER;
    static readonly PROMISE = Type_Which.PROMISE;
    static readonly STRUCTURE = Type_Which.STRUCTURE;
    static readonly STRING = Type_Which.STRING;
    static readonly OBJECT = Type_Which.OBJECT;
    static readonly ARRAY = Type_Which.ARRAY;
    static readonly MAYBE = Type_Which.MAYBE;
    static readonly DICT = Type_Which.DICT;
    static readonly ONE_OF = Type_Which.ONE_OF;
    static readonly BUILTIN = Type_Which.BUILTIN;
    static readonly INTRINSIC = Type_Which.INTRINSIC;
    static readonly FUNCTION = Type_Which.FUNCTION;
    static readonly JSG_IMPL = Type_Which.JSG_IMPL;
    static readonly JS_BUILTIN = Type_Which.JS_BUILTIN;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    isUnknown(): boolean;
    setUnknown(): void;
    isVoidt(): boolean;
    setVoidt(): void;
    isBoolt(): boolean;
    setBoolt(): void;
    adoptNumber(value: capnp.Orphan<NumberType>): void;
    disownNumber(): capnp.Orphan<NumberType>;
    getNumber(): NumberType;
    hasNumber(): boolean;
    initNumber(): NumberType;
    isNumber(): boolean;
    setNumber(value: NumberType): void;
    adoptPromise(value: capnp.Orphan<PromiseType>): void;
    disownPromise(): capnp.Orphan<PromiseType>;
    getPromise(): PromiseType;
    hasPromise(): boolean;
    initPromise(): PromiseType;
    isPromise(): boolean;
    setPromise(value: PromiseType): void;
    adoptStructure(value: capnp.Orphan<StructureType>): void;
    disownStructure(): capnp.Orphan<StructureType>;
    getStructure(): StructureType;
    hasStructure(): boolean;
    initStructure(): StructureType;
    isStructure(): boolean;
    setStructure(value: StructureType): void;
    adoptString(value: capnp.Orphan<StringType>): void;
    disownString(): capnp.Orphan<StringType>;
    getString(): StringType;
    hasString(): boolean;
    initString(): StringType;
    isString(): boolean;
    setString(value: StringType): void;
    isObject(): boolean;
    setObject(): void;
    adoptArray(value: capnp.Orphan<ArrayType>): void;
    disownArray(): capnp.Orphan<ArrayType>;
    getArray(): ArrayType;
    hasArray(): boolean;
    initArray(): ArrayType;
    isArray(): boolean;
    setArray(value: ArrayType): void;
    adoptMaybe(value: capnp.Orphan<MaybeType>): void;
    disownMaybe(): capnp.Orphan<MaybeType>;
    getMaybe(): MaybeType;
    hasMaybe(): boolean;
    initMaybe(): MaybeType;
    isMaybe(): boolean;
    setMaybe(value: MaybeType): void;
    adoptDict(value: capnp.Orphan<DictType>): void;
    disownDict(): capnp.Orphan<DictType>;
    getDict(): DictType;
    hasDict(): boolean;
    initDict(): DictType;
    isDict(): boolean;
    setDict(value: DictType): void;
    adoptOneOf(value: capnp.Orphan<OneOfType>): void;
    disownOneOf(): capnp.Orphan<OneOfType>;
    getOneOf(): OneOfType;
    hasOneOf(): boolean;
    initOneOf(): OneOfType;
    isOneOf(): boolean;
    setOneOf(value: OneOfType): void;
    adoptBuiltin(value: capnp.Orphan<BuiltinType>): void;
    disownBuiltin(): capnp.Orphan<BuiltinType>;
    getBuiltin(): BuiltinType;
    hasBuiltin(): boolean;
    initBuiltin(): BuiltinType;
    isBuiltin(): boolean;
    setBuiltin(value: BuiltinType): void;
    adoptIntrinsic(value: capnp.Orphan<IntrinsicType>): void;
    disownIntrinsic(): capnp.Orphan<IntrinsicType>;
    getIntrinsic(): IntrinsicType;
    hasIntrinsic(): boolean;
    initIntrinsic(): IntrinsicType;
    isIntrinsic(): boolean;
    setIntrinsic(value: IntrinsicType): void;
    adoptFunction(value: capnp.Orphan<FunctionType>): void;
    disownFunction(): capnp.Orphan<FunctionType>;
    getFunction(): FunctionType;
    hasFunction(): boolean;
    initFunction(): FunctionType;
    isFunction(): boolean;
    setFunction(value: FunctionType): void;
    adoptJsgImpl(value: capnp.Orphan<JsgImplType>): void;
    disownJsgImpl(): capnp.Orphan<JsgImplType>;
    getJsgImpl(): JsgImplType;
    hasJsgImpl(): boolean;
    initJsgImpl(): JsgImplType;
    isJsgImpl(): boolean;
    setJsgImpl(value: JsgImplType): void;
    adoptJsBuiltin(value: capnp.Orphan<JsBuiltinType>): void;
    disownJsBuiltin(): capnp.Orphan<JsBuiltinType>;
    getJsBuiltin(): JsBuiltinType;
    hasJsBuiltin(): boolean;
    initJsBuiltin(): JsBuiltinType;
    isJsBuiltin(): boolean;
    setJsBuiltin(value: JsBuiltinType): void;
    toString(): string;
    which(): Type_Which;
}
export declare class NumberType extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getName(): string;
    setName(value: string): void;
    toString(): string;
}
export declare class PromiseType extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptValue(value: capnp.Orphan<Type>): void;
    disownValue(): capnp.Orphan<Type>;
    getValue(): Type;
    hasValue(): boolean;
    initValue(): Type;
    setValue(value: Type): void;
    toString(): string;
}
export declare class StructureType extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getName(): string;
    setName(value: string): void;
    getFullyQualifiedName(): string;
    setFullyQualifiedName(value: string): void;
    toString(): string;
}
export declare class StringType extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getName(): string;
    setName(value: string): void;
    toString(): string;
}
export declare class IntrinsicType extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getName(): string;
    setName(value: string): void;
    toString(): string;
}
export declare class ArrayType extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptElement(value: capnp.Orphan<Type>): void;
    disownElement(): capnp.Orphan<Type>;
    getElement(): Type;
    hasElement(): boolean;
    initElement(): Type;
    setElement(value: Type): void;
    getName(): string;
    setName(value: string): void;
    toString(): string;
}
export declare class MaybeType extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptValue(value: capnp.Orphan<Type>): void;
    disownValue(): capnp.Orphan<Type>;
    getValue(): Type;
    hasValue(): boolean;
    initValue(): Type;
    setValue(value: Type): void;
    getName(): string;
    setName(value: string): void;
    toString(): string;
}
export declare class DictType extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptKey(value: capnp.Orphan<Type>): void;
    disownKey(): capnp.Orphan<Type>;
    getKey(): Type;
    hasKey(): boolean;
    initKey(): Type;
    setKey(value: Type): void;
    adoptValue(value: capnp.Orphan<Type>): void;
    disownValue(): capnp.Orphan<Type>;
    getValue(): Type;
    hasValue(): boolean;
    initValue(): Type;
    setValue(value: Type): void;
    toString(): string;
}
export declare class OneOfType extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Variants: capnp.ListCtor<Type>;
    adoptVariants(value: capnp.Orphan<capnp.List<Type>>): void;
    disownVariants(): capnp.Orphan<capnp.List<Type>>;
    getVariants(): capnp.List<Type>;
    hasVariants(): boolean;
    initVariants(length: number): capnp.List<Type>;
    setVariants(value: capnp.List<Type>): void;
    toString(): string;
}
export declare enum BuiltinType_Type {
    V8UINT8ARRAY = 0,
    V8ARRAY_BUFFER_VIEW = 1,
    JSG_BUFFER_SOURCE = 2,
    KJ_DATE = 3,
    V8FUNCTION = 4,
    V8ARRAY_BUFFER = 5
}
export declare class BuiltinType extends __S {
    static readonly Type: typeof BuiltinType_Type;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getType(): BuiltinType_Type;
    setType(value: BuiltinType_Type): void;
    toString(): string;
}
export declare class FunctionType extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Args: capnp.ListCtor<Type>;
    adoptReturnType(value: capnp.Orphan<Type>): void;
    disownReturnType(): capnp.Orphan<Type>;
    getReturnType(): Type;
    hasReturnType(): boolean;
    initReturnType(): Type;
    setReturnType(value: Type): void;
    adoptArgs(value: capnp.Orphan<capnp.List<Type>>): void;
    disownArgs(): capnp.Orphan<capnp.List<Type>>;
    getArgs(): capnp.List<Type>;
    hasArgs(): boolean;
    initArgs(length: number): capnp.List<Type>;
    setArgs(value: capnp.List<Type>): void;
    toString(): string;
}
export declare enum JsgImplType_Type {
    CONFIGURATION = 0,
    V8ISOLATE = 1,
    JSG_LOCK = 2,
    JSG_TYPE_HANDLER = 3,
    JSG_UNIMPLEMENTED = 4,
    JSG_VARARGS = 5,
    JSG_SELF_REF = 6,
    V8FUNCTION_CALLBACK_INFO = 7,
    V8PROPERTY_CALLBACK_INFO = 8,
    JSG_NAME = 9
}
export declare class JsgImplType extends __S {
    static readonly Type: typeof JsgImplType_Type;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getType(): JsgImplType_Type;
    setType(value: JsgImplType_Type): void;
    toString(): string;
}
export declare class Structure extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Members: capnp.ListCtor<Member>;
    static _BuiltinModules: capnp.ListCtor<Module>;
    getName(): string;
    setName(value: string): void;
    getFullyQualifiedName(): string;
    setFullyQualifiedName(value: string): void;
    adoptMembers(value: capnp.Orphan<capnp.List<Member>>): void;
    disownMembers(): capnp.Orphan<capnp.List<Member>>;
    getMembers(): capnp.List<Member>;
    hasMembers(): boolean;
    initMembers(length: number): capnp.List<Member>;
    setMembers(value: capnp.List<Member>): void;
    adoptExtends(value: capnp.Orphan<Type>): void;
    disownExtends(): capnp.Orphan<Type>;
    getExtends(): Type;
    hasExtends(): boolean;
    initExtends(): Type;
    setExtends(value: Type): void;
    getIterable(): boolean;
    setIterable(value: boolean): void;
    adoptIterator(value: capnp.Orphan<Method>): void;
    disownIterator(): capnp.Orphan<Method>;
    getIterator(): Method;
    hasIterator(): boolean;
    initIterator(): Method;
    setIterator(value: Method): void;
    getAsyncIterable(): boolean;
    setAsyncIterable(value: boolean): void;
    adoptAsyncIterator(value: capnp.Orphan<Method>): void;
    disownAsyncIterator(): capnp.Orphan<Method>;
    getAsyncIterator(): Method;
    hasAsyncIterator(): boolean;
    initAsyncIterator(): Method;
    setAsyncIterator(value: Method): void;
    getTsRoot(): boolean;
    setTsRoot(value: boolean): void;
    getTsOverride(): string;
    setTsOverride(value: string): void;
    getTsDefine(): string;
    setTsDefine(value: string): void;
    adoptCallable(value: capnp.Orphan<FunctionType>): void;
    disownCallable(): capnp.Orphan<FunctionType>;
    getCallable(): FunctionType;
    hasCallable(): boolean;
    initCallable(): FunctionType;
    setCallable(value: FunctionType): void;
    adoptBuiltinModules(value: capnp.Orphan<capnp.List<Module>>): void;
    disownBuiltinModules(): capnp.Orphan<capnp.List<Module>>;
    getBuiltinModules(): capnp.List<Module>;
    hasBuiltinModules(): boolean;
    initBuiltinModules(length: number): capnp.List<Module>;
    setBuiltinModules(value: capnp.List<Module>): void;
    toString(): string;
}
export declare class Member_Nested extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptStructure(value: capnp.Orphan<Structure>): void;
    disownStructure(): capnp.Orphan<Structure>;
    getStructure(): Structure;
    hasStructure(): boolean;
    initStructure(): Structure;
    setStructure(value: Structure): void;
    getName(): string;
    setName(value: string): void;
    toString(): string;
}
export declare enum Member_Which {
    METHOD = 0,
    PROPERTY = 1,
    NESTED = 2,
    CONSTANT = 3,
    CONSTRUCTOR = 4
}
export declare class Member extends __S {
    static readonly METHOD = Member_Which.METHOD;
    static readonly PROPERTY = Member_Which.PROPERTY;
    static readonly NESTED = Member_Which.NESTED;
    static readonly CONSTANT = Member_Which.CONSTANT;
    static readonly CONSTRUCTOR = Member_Which.CONSTRUCTOR;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    adoptMethod(value: capnp.Orphan<Method>): void;
    disownMethod(): capnp.Orphan<Method>;
    getMethod(): Method;
    hasMethod(): boolean;
    initMethod(): Method;
    isMethod(): boolean;
    setMethod(value: Method): void;
    adoptProperty(value: capnp.Orphan<Property>): void;
    disownProperty(): capnp.Orphan<Property>;
    getProperty(): Property;
    hasProperty(): boolean;
    initProperty(): Property;
    isProperty(): boolean;
    setProperty(value: Property): void;
    getNested(): Member_Nested;
    initNested(): Member_Nested;
    isNested(): boolean;
    setNested(): void;
    adoptConstant(value: capnp.Orphan<Constant>): void;
    disownConstant(): capnp.Orphan<Constant>;
    getConstant(): Constant;
    hasConstant(): boolean;
    initConstant(): Constant;
    isConstant(): boolean;
    setConstant(value: Constant): void;
    adoptConstructor(value: capnp.Orphan<Constructor>): void;
    disownConstructor(): capnp.Orphan<Constructor>;
    getConstructor(): Constructor;
    hasConstructor(): boolean;
    initConstructor(): Constructor;
    isConstructor(): boolean;
    setConstructor(value: Constructor): void;
    toString(): string;
    which(): Member_Which;
}
export declare class Method extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Args: capnp.ListCtor<Type>;
    getName(): string;
    setName(value: string): void;
    adoptReturnType(value: capnp.Orphan<Type>): void;
    disownReturnType(): capnp.Orphan<Type>;
    getReturnType(): Type;
    hasReturnType(): boolean;
    initReturnType(): Type;
    setReturnType(value: Type): void;
    adoptArgs(value: capnp.Orphan<capnp.List<Type>>): void;
    disownArgs(): capnp.Orphan<capnp.List<Type>>;
    getArgs(): capnp.List<Type>;
    hasArgs(): boolean;
    initArgs(length: number): capnp.List<Type>;
    setArgs(value: capnp.List<Type>): void;
    getStatic(): boolean;
    setStatic(value: boolean): void;
    toString(): string;
}
export declare class Property extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getName(): string;
    setName(value: string): void;
    adoptType(value: capnp.Orphan<Type>): void;
    disownType(): capnp.Orphan<Type>;
    getType(): Type;
    hasType(): boolean;
    initType(): Type;
    setType(value: Type): void;
    getReadonly(): boolean;
    setReadonly(value: boolean): void;
    getLazy(): boolean;
    setLazy(value: boolean): void;
    getPrototype(): boolean;
    setPrototype(value: boolean): void;
    toString(): string;
}
export declare class Constant extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getName(): string;
    setName(value: string): void;
    getValue(): capnp.Int64;
    setValue(value: capnp.Int64): void;
    toString(): string;
}
export declare class Constructor extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Args: capnp.ListCtor<Type>;
    adoptArgs(value: capnp.Orphan<capnp.List<Type>>): void;
    disownArgs(): capnp.Orphan<capnp.List<Type>>;
    getArgs(): capnp.List<Type>;
    hasArgs(): boolean;
    initArgs(length: number): capnp.List<Type>;
    setArgs(value: capnp.List<Type>): void;
    toString(): string;
}
export declare enum Module_Which {
    STRUCTURE_NAME = 0,
    TS_DECLARATIONS = 1
}
export declare class Module extends __S {
    static readonly STRUCTURE_NAME = Module_Which.STRUCTURE_NAME;
    static readonly TS_DECLARATIONS = Module_Which.TS_DECLARATIONS;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getSpecifier(): string;
    setSpecifier(value: string): void;
    getStructureName(): string;
    isStructureName(): boolean;
    setStructureName(value: string): void;
    getTsDeclarations(): string;
    isTsDeclarations(): boolean;
    setTsDeclarations(value: string): void;
    toString(): string;
    which(): Module_Which;
}
export declare class StructureGroups_StructureGroup extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Structures: capnp.ListCtor<Structure>;
    getName(): string;
    setName(value: string): void;
    adoptStructures(value: capnp.Orphan<capnp.List<Structure>>): void;
    disownStructures(): capnp.Orphan<capnp.List<Structure>>;
    getStructures(): capnp.List<Structure>;
    hasStructures(): boolean;
    initStructures(length: number): capnp.List<Structure>;
    setStructures(value: capnp.List<Structure>): void;
    toString(): string;
}
export declare class StructureGroups extends __S {
    static readonly StructureGroup: typeof StructureGroups_StructureGroup;
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    static _Groups: capnp.ListCtor<StructureGroups_StructureGroup>;
    static _Modules: capnp.ListCtor<Module>;
    adoptGroups(value: capnp.Orphan<capnp.List<StructureGroups_StructureGroup>>): void;
    disownGroups(): capnp.Orphan<capnp.List<StructureGroups_StructureGroup>>;
    getGroups(): capnp.List<StructureGroups_StructureGroup>;
    hasGroups(): boolean;
    initGroups(length: number): capnp.List<StructureGroups_StructureGroup>;
    setGroups(value: capnp.List<StructureGroups_StructureGroup>): void;
    adoptModules(value: capnp.Orphan<capnp.List<Module>>): void;
    disownModules(): capnp.Orphan<capnp.List<Module>>;
    getModules(): capnp.List<Module>;
    hasModules(): boolean;
    initModules(length: number): capnp.List<Module>;
    setModules(value: capnp.List<Module>): void;
    toString(): string;
}
export declare class JsBuiltinType extends __S {
    static readonly _capnp: {
        displayName: string;
        id: string;
        size: capnp.ObjectSize;
    };
    getModule(): string;
    setModule(value: string): void;
    getExport(): string;
    setExport(value: string): void;
    toString(): string;
}
