var valid = {

  validfun: function(value, patten, IsAllowEmpty) {
    if (arguments.length == 0) {
      return false;
    }

    var re = new RegExp(patten);
    if ((isNaN(value) && re.test(parseInt(value))) || re.test(value)) {
      return true;
    } else {
      if (IsAllowEmpty) {
        return this.IsEmpty(value);
      } else {
        return false;
      }
    }
  },
  IsEmpty: function(input) {

    if (arguments.length == 0) {
      return false;
    }
    if (input == "" || isNaN(input)) {
      return true;
    } else {
      return false;
    }
  },

  IsNumber: function(value, IsAllowEmpty) {
    if (arguments.length == 0) {
      return false;
    }
    return this.validfun(parseInt(value), "^[0-9]+$", IsAllowEmpty);
  },

  IsTWMobilePhone: function(value, IsAllowEmpty) {
    if (arguments.length == 0) {
      return false;
    }
    return this.validfun(value, "^09[0-9]{8}$", IsAllowEmpty);
  },

  IsEnglish: function(value, IsAllowEmpty) {
    if (arguments.length == 0) {
      return false;
    }
    return this.validfun(value, "^[A-Za-z]+$", IsAllowEmpty);
  },

  IsEngAndNumber: function(value, IsAllowEmpty) {

    return this.validfun(value, "^[A-Za-z0-9]+$", IsAllowEmpty);
  },

  IsChNum: function(value, IsAllowEmpty) {
    if (arguments.length == 0) {
      return false;
    }
    return this.validfun(value, "^[\u4E00-\u9fa50-9]+$", IsAllowEmpty);
  },

  IsChEn: function(value, IsAllowEmpty) {
    if (arguments.length == 0) {
      return false;
    }
    return this.validfun(value, "^[\u4E00-\u9fa5A-Za-z]+$", IsAllowEmpty);
  },

  IsChinese: function(value, IsAllowEmpty) {
    if (arguments.length == 0) {
      return false;
    }
    return this.validfun(value, "^[\u4E00-\u9fa5]+$", IsAllowEmpty);
  },

  IsChEgNu: function(value, IsAllowEmpty) {
    if (arguments.length == 0) {
      return false;
    }
    return this.validfun(value, "^[\u4E00-\u9fa5A-Za-z0-9]+$", IsAllowEmpty);
  },

  IsEmail: function(value, IsAllowEmpty) {
    if (arguments.length == 0) {
      return false;
    }
    return this.validfun(value, "^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", IsAllowEmpty);
  },

};

module.exports = valid;