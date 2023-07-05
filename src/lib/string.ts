export function obfuscateString(str: string, config: number): string {
  const prefix = str.substring(0, 1);
  const suffix = "*".repeat(config);
  return `${prefix}${str
    .substring(1)
    .substring(0, str.length - config - 1)}${suffix}`;
}
