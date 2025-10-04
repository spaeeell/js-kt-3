import { TestCase } from "vitest/dist/node.js";
import { DotReporter } from "vitest/reporters";

export default class CustomReporter extends DotReporter {
  /**
   *
   * @param {TestCase} test
   */
  onTestCaseResult(test) {
    super.onTestCaseResult(test);
  }
}
