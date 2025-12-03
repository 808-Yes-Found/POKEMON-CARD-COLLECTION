import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // 🔥 next.js 기본 ignore 덮어쓰기
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      "no-var": "off", // var 허용
      "prefer-const": "warn", // const 권장
      "no-redeclare": 1, // 중복 선언 경고
      // 필요하면 여기에 더 추가!
    },
  },
  {
    ignores: [".history", "dist"],
  },
]);

export default eslintConfig;
