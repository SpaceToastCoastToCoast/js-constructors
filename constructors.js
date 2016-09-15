/**
 * Creates a generic spell that can be cast.
 *
 * @name Spell
 * @param {string} name         The name of the spell.
 * @param {number} cost         The amount needed to cast this spell.
 * @param {string} description  A short description of the spell.
 * @property {string} name
 * @property {number} cost
 * @property {string} description
 * @method   getDetails
 */

function Spell(name, cost, description) {

  if(typeof name === 'string' || name instanceof String) {
    this.name = name;
  } else {
    throw new TypeError('name must be a String');
  }
  if(typeof cost === 'number' || cost instanceof Number) {
    this.cost = cost;
  } else {
    throw new TypeError('cost must be a Number');
  }
  if(typeof description === 'string' || description instanceof String) {
    this.description = description;
  } else {
    throw new TypeError('description must be a String');
  }

  /**
   * Returns a string of all of the spell's details.
   * The format doesn't matter, as long as it contains the spell name, cost, and description.
   *
   * @name getDetails
   * @return {string} details containing all of the spells information.
   */
  this.getDetails = function() {
    return 'Spell Name: ' + this.name + 'Cost: ' +
      this.cost +  'Mana' + 'Description: ' + this.description;
  };

}

/**
 * A spell that deals damage.
 * We want to keep this code DRY (Don't Repeat Yourself).
 *
 * So you should use `Spell.call()` to assign the spell name, cost, and description.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 *
 * In addition, you will also want to assign `DamageSpell.prototype`
 * a value so that it inherits from `Spell`.
 * Make sure to call this OUTSIDE of the function declaration.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype
 *
 * @name DamageSpell
 * @param {string} name         The name of the spell.
 * @param {number} cost         The amount needed to cast this spell.
 * @param {number} damage       The amount of damage this spell deals.
 * @param {string} description  A short description of the spell.
 * @property {string} name
 * @property {number} cost
 * @property {number} damage
 * @property {string} description
 */

function DamageSpell(name, cost, damage, description) {
  Spell.call(this, name, cost, description);
  if(typeof damage === 'number' || damage instanceof Number) {
    this.damage = damage;
  } else {
    throw new TypeError('damage must be a Number');
  }
}

DamageSpell.prototype = Object.create(Spell.prototype);

/**
 * Now that you've created some spells, let's create
 * `Spellcaster` objects that can use them!
 *
 * @name Spellcaster
 * @param {string} name         The spellcaster's name.
 * @param {number} health       The spellcaster's health points.
 * @param {number} mana         The spellcaster's mana points, used for casting spells.
 * @property {string} name
 * @property {number} health
 * @property {mana} mana
 * @property {boolean} isAlive  Default value should be `true`.
 * @method  inflictDamage
 * @method  spendMana
 * @method  invoke
 */

function Spellcaster(name, health, mana) {
  if(typeof name === 'string' || name instanceof String) {
    this.name = name;
  } else {
    throw new TypeError('name must be a String');
  }
  if(typeof health === 'number' || health instanceof Number) {
    if(health > 0) {
      this.health = health;
    } else {
      throw new RangeError('health must be a Number greater than zero');
    }
  } else {
    throw new TypeError('health must be a Number greater than zero');
  }
  if(typeof mana === 'number' || mana instanceof Number) {
    this.mana = mana;
  } else {
    throw new TypeError('mana must be a Number');
  }
  this.isAlive = true;

  /**
   * @method inflictDamage
   *
   * The spellcaster loses health equal to `damage`.
   * Health should never be negative.
   * If the spellcaster's health drops to 0,
   * its `isAlive` property should be set to `false`.
   *
   * @param  {number} damage  Amount of damage to deal to the spellcaster
   */
  this.inflictDamage = function(damage) {

  };

  /**
   * @method spendMana
   *
   * Reduces the spellcaster's mana by `cost`.
   * Mana should only be reduced only if there is enough mana to spend.
   *
   * @param  {number} cost      The amount of mana to spend.
   * @return {boolean} success  Whether mana was successfully spent.
   */

  this.spendMana = function(cost) {
    return false;
  };

  /**
   * @method invoke
   *
   * Allows the spellcaster to cast spells.
   * The first parameter should either be a `Spell` or `DamageSpell`.
   * If it is a `DamageSpell`, the second parameter should be a `Spellcaster`.
   * The function should return `false` if the above conditions are not satisfied.
   *
   * You should use `instanceof` to check for these conditions.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
   *
   * Next check if the spellcaster has enough mana to cast the spell.
   * If it can cast a spell, it should lose mana  equal to the spell's cost.
   * If there is not enough mana, return `false`.
   *
   * If there is enough mana to cast the spell, return `true`.
   * In addition, if it is a `DamageSpell` reduce the target's health by the spell's damage value.
   *
   * Use functions you've previously created: (`inflictDamage`, `spendMana`)
   * to help you with this.
   *
   * @param  {(Spell|DamageSpell)} spell  The spell to be cast.
   * @param  {Spellcaster} target         The spell target to be inflicted.
   * @return {boolean}                    Whether the spell was successfully cast.
   */
  this.invoke = function() {
    return false;
  };

}
