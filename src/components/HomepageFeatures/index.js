import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '',
    Svg: require('@site/static/img/white.svg').default,
    description: (
      <>
       
      </>
    ),
  },
  {
    title: <h1>Kebab</h1>,
    Svg: require('@site/static/img/image2vector1.svg').default,
    description: (
      <>
    <h3>Ingredients:</h3>
    <ul>
        <li>500 g chicken fillet, cut into strips</li>
        <li>2-3 tablespoons olive oil</li>
        <li>2 teaspoons turmeric</li>
        <li>2 teaspoons cumin</li>
        <li>1 teaspoon cayenne pepper</li>
        <li>1 teaspoon paprika</li>
        <li>1 teaspoon salt</li>
        <li>1/2 teaspoon black pepper</li>
        <li>2 cloves garlic, minced</li>
        <li>4-6 pit breads</li>
        <li>Lettuce leaves</li>
        <li>Tomatoes, sliced</li>
        <li>Cucumbers, sliced</li>
        <li>Red onion, cut into half rings</li>
        <li>Mayonnaise or tahini sauce for serving</li>
        <li>Lemon wedges for serving</li>
    </ul>

    <h3>Instructions:</h3>
    <ol>
        <li>In a large bowl, combine olive oil, turmeric, cumin, cayenne pepper, paprika, salt, black pepper, and minced garlic. Add the chicken and stir well to coat the chicken evenly in the spices. Leave for 15-20 minutes to marinate.</li>
        <li>Heat a frying pan over medium heat. Fry marinated chicken for 8 to 10 minutes or until cooked through, stirring occasionally to prevent burning. The chicken should be golden and cooked through.</li>
        <li>Heat the pita bread in the oven or in a frying pan until warm.</li>
        <li>To assemble the shawarma, take one pita bread and top it with lettuce, fried chicken, tomato slices, cucumber slices, and red onion half rings. Top with mayonnaise or tahini sauce if desired. Wrap the pita into a cone or roll shape.</li>
        <li>Serve the shawarma hot with lemon wedges on the side for added freshness.</li>
    </ol>

    <p>Bon appétit!</p>
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
