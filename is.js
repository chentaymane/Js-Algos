const is = {
  num:    function(v) { return typeof v === 'number' },
  nan:    function(v) { return Number.isNaN(v) },
  str:    function(v) { return typeof v === 'string' },
  bool:   function(v) { return typeof v === 'boolean' },
  undef:  function(v) { return typeof v === 'undefined' },
  def:    function(v) { return typeof v !== 'undefined' },
  arr:    function(v) { return Array.isArray(v) },
  obj:    function(v) { return typeof v === 'object' && !Array.isArray(v) },
  fun:    function(v) { return typeof v === 'function' },
  truthy: function(v) { return !!v },
  falsy:  function(v) { return !v },
}