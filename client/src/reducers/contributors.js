/**
 * @file This file holds reducers for the contributors to this project.
 */

/** A contributor to this project. */
class Contributor {
  constructor(name, description) {
    /** The display name of the contributor. */
    this.name = name;

    /** A description of the contributor. */
    this.description = description;
  }

  toJson() {
    const { name, description } = this;
    return { name, description };
  }
}

/** Map of all contributors. */
const contributors = {
  1: new Contributor('Brian Chen (Project Advisor)', 'Hi I am Brian').toJson(),
  2: new Contributor('Name1', 'Description').toJson(),
  3: new Contributor('Name2', 'Description').toJson(),
  4: new Contributor('Name3', 'Description').toJson(),
  5: new Contributor('Name4', 'Description').toJson(),
  keys: [1, 2, 3, 4, 5]
};

const contributorsReducer = (state = contributors, action) => {
  return state;
};

/** Classes and Constants */
export { Contributor };

/** Reducers */
export { contributorsReducer };
