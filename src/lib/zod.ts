import { z } from "zod";

// https://github.com/colinhacks/zod/blob/master/ERROR_HANDLING.md

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  console.log(issue, ctx);

  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === "string") {
      return { message: "This field is required" };
    }
  }

  if (issue.code === z.ZodIssueCode.custom) {
    return { message: `less-than-${(issue.params || {}).minimum}` };
  }

  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);
