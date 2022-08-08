import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Declarative Functional Programming",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        The era of imperative programming for simple task is over. As a Vysma
        developer, you only need to define "what" to implement, not "how" even
        for advanced task.
      </>
    ),
  },
  {
    title: "Predictable Code",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Vysma developer take seconds to know what the code is doing instead of
        reading bunch of for loop or if else statement.
      </>
    ),
  },
  {
    title: "Strongly Typed",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        The library is completely written in TypeScript, data modeling make
        simple, passing arguments and checking return type is painless.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
