function isObject(val: any) {
  return val.constructor === Object;
}

function isNumber(val: any) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

function isBoolean(val: any) {
  return val === "false" || val === "true";
}

function isArray(val: any) {
  return Array.isArray(val);
}

function parseValue(val: any): any {
  if (typeof val === "undefined" || val === "") {
    return null;
  } else if (isBoolean(val)) {
    return parseBoolean(val);
  } else if (isArray(val)) {
    return parseArray(val);
  } else if (isObject(val)) {
    return parseObject(val);
  } else if (isNumber(val)) {
    return parseNumber(val);
  }

  return val.toString();
}

export function parseObject(obj: any) {
  var result: Record<string, any> = {};
  var key, val;
  for (key in obj) {
    val = parseValue(obj[key]);
    if (val !== null) result[key] = val; // ignore null values
  }
  return result;
}

function parseArray<T>(arr: Array<T>) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result[i] = parseValue(arr[i]);
  }
  return result;
}

function parseNumber(val: any) {
  return Number(val);
}

function parseBoolean(val: any) {
  return val === "true";
}
