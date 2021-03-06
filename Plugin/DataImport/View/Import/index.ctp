<a href="/data_categories">Manage Data Categories</a><br />

Import data files:
<ul>
	<?php foreach ($imports as $method_name => $print_name): ?>
		<li>
			<?php echo $this->Html->link(
				$print_name,
				array(
					'plugin' => 'data_import',
					'controller' => 'import',
					'action' => 'process',
					$method_name
				)
			); ?>
		</li>
	<?php endforeach; ?>
</ul>

<?php $this->Html->script('import', array('inline' => false, 'plugin' => 'data_import')); ?>