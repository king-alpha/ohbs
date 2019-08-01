<template>
  <div id="search-wrapper">
    <form id="filters" class="ui form">
      <div class="filter">
        <label>House Type</label>
        <select class="ui fluid dropdown">
          <option value="4 bedroom">4 Bed Room</option>
          <option value="4 bedroom">4 Bed Room</option>
          <option value="4 bedroom">4 Bed Room</option>
        </select>
      </div>
      <div class="filter">
        <label>offer type</label>
        <select>
          <option value="for sale">For Sale</option>
        </select>
      </div>
      <div class="filter">
        <label>Select City</label>
        <select>
          <option value="accra">Accra</option>
        </select>
      </div>
      <div class="filter">
        <button>search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "search"
};
</script>

<style scoped>
#search-wrapper {
  max-width: 40%;
  height: 80px;
  margin: 37% auto;
}

#filters {
  padding: 8px;
  border-radius: 2px;
  border: 3.5px solid #fafafa;
  background-color: #fff;
  display: flex;
  justify-content: center;
}

.filter {
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-transform: capitalize;
  color: #000;
}

.filter label {
  margin-bottom: 12px;
  font-size: 1.25em;
}

.filter:last-of-type {
  align-self: flex-end;
}
</style>
