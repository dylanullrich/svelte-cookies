<script>
  let objFormConfig = JSON.parse(`{
    "formElements": [
      {
          "id": "f1",
          "label": "First value?" 
      },
      {
          "id": "f2",
          "label": "Second value?" 
      },
      {
          "id": "f3",
          "label": "Calculated automatically",
          "computed": {
             "type": "sum",
            "variables": ["f1", "f2"]
          }
      }
    ]
  }`);
    
    function compute(computed) {
      switch (computed.type) {
        case 'sum':
          return sum(computed.variables);
        default:
          return undefined;
      }
    }
  
    function sum (variables) {
      let sum = 0;
      for (const item of objFormConfig.formElements) {
        if (variables.indexOf(item.id) > -1) {
          sum += Number(item.value) || 0;
        }
      }
      return sum;
    }
  </script>
  <form>
  {#each objFormConfig.formElements as item}
    <div>
      <label for="{item.id}">{item.label}
      {#if item.computed}
        <input type=number id={item.id} value={compute(item.computed)} readonly/>
      {:else}
        <input type=number id={item.id} bind:value={item.value}/>
      {/if}
      </label>
    </div>
  {/each}
  </form>